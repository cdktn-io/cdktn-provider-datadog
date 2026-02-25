# `dataDatadogSecurityMonitoringCriticalAsset` Submodule <a name="`dataDatadogSecurityMonitoringCriticalAsset` Submodule" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringCriticalAsset <a name="DataDatadogSecurityMonitoringCriticalAsset" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/data-sources/security_monitoring_critical_asset datadog_security_monitoring_critical_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

new dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset(scope: Construct, id: string, config: DataDatadogSecurityMonitoringCriticalAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig">DataDatadogSecurityMonitoringCriticalAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig">DataDatadogSecurityMonitoringCriticalAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isConstruct"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isTerraformElement"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isTerraformDataSource"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.generateConfigForImport"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogSecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSecurityMonitoringCriticalAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSecurityMonitoringCriticalAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/data-sources/security_monitoring_critical_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSecurityMonitoringCriticalAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.ruleQuery">ruleQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.ruleQuery"></a>

```typescript
public readonly ruleQuery: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringCriticalAssetConfig <a name="DataDatadogSecurityMonitoringCriticalAssetConfig" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAsset } from '@cdktn/provider-datadog'

const dataDatadogSecurityMonitoringCriticalAssetConfig: dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.id">id</a></code> | <code>string</code> | The ID of the critical asset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAsset.DataDatadogSecurityMonitoringCriticalAssetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/data-sources/security_monitoring_critical_asset#id DataDatadogSecurityMonitoringCriticalAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



