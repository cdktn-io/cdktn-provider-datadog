# `dataDatadogSecurityMonitoringCriticalAssets` Submodule <a name="`dataDatadogSecurityMonitoringCriticalAssets` Submodule" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringCriticalAssets <a name="DataDatadogSecurityMonitoringCriticalAssets" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/security_monitoring_critical_assets datadog_security_monitoring_critical_assets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAssets } from '@cdktn/provider-datadog'

new dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets(scope: Construct, id: string, config?: DataDatadogSecurityMonitoringCriticalAssetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig">DataDatadogSecurityMonitoringCriticalAssetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig">DataDatadogSecurityMonitoringCriticalAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSecurityMonitoringCriticalAssets resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAssets } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAssets } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAssets } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAssets } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogSecurityMonitoringCriticalAssets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSecurityMonitoringCriticalAssets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSecurityMonitoringCriticalAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/security_monitoring_critical_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSecurityMonitoringCriticalAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.criticalAssets">criticalAssets</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `criticalAssets`<sup>Required</sup> <a name="criticalAssets" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.criticalAssets"></a>

```typescript
public readonly criticalAssets: DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringCriticalAssetsConfig <a name="DataDatadogSecurityMonitoringCriticalAssetsConfig" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAssets } from '@cdktn/provider-datadog'

const dataDatadogSecurityMonitoringCriticalAssetsConfig: dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

### DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets <a name="DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAssets } from '@cdktn/provider-datadog'

const dataDatadogSecurityMonitoringCriticalAssetsCriticalAssets: dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList <a name="DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAssets } from '@cdktn/provider-datadog'

new dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.get"></a>

```typescript
public get(index: number): DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference <a name="DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringCriticalAssets } from '@cdktn/provider-datadog'

new dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.ruleQuery">ruleQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.ruleQuery"></a>

```typescript
public readonly ruleQuery: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets</a>

---



