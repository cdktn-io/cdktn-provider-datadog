# `dataDatadogSecurityMonitoringSuppressions` Submodule <a name="`dataDatadogSecurityMonitoringSuppressions` Submodule" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringSuppressions <a name="DataDatadogSecurityMonitoringSuppressions" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/data-sources/security_monitoring_suppressions datadog_security_monitoring_suppressions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringSuppressions } from '@cdktn/provider-datadog'

new dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions(scope: Construct, id: string, config?: DataDatadogSecurityMonitoringSuppressionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig">DataDatadogSecurityMonitoringSuppressionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig">DataDatadogSecurityMonitoringSuppressionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSecurityMonitoringSuppressions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isConstruct"></a>

```typescript
import { dataDatadogSecurityMonitoringSuppressions } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformElement"></a>

```typescript
import { dataDatadogSecurityMonitoringSuppressions } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformDataSource"></a>

```typescript
import { dataDatadogSecurityMonitoringSuppressions } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport"></a>

```typescript
import { dataDatadogSecurityMonitoringSuppressions } from '@cdktn/provider-datadog'

dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogSecurityMonitoringSuppressions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSecurityMonitoringSuppressions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSecurityMonitoringSuppressions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/data-sources/security_monitoring_suppressions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSecurityMonitoringSuppressions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.suppressionIds">suppressionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.suppressions">suppressions</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList">DataDatadogSecurityMonitoringSuppressionsSuppressionsList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `suppressionIds`<sup>Required</sup> <a name="suppressionIds" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.suppressionIds"></a>

```typescript
public readonly suppressionIds: string[];
```

- *Type:* string[]

---

##### `suppressions`<sup>Required</sup> <a name="suppressions" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.suppressions"></a>

```typescript
public readonly suppressions: DataDatadogSecurityMonitoringSuppressionsSuppressionsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList">DataDatadogSecurityMonitoringSuppressionsSuppressionsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringSuppressionsConfig <a name="DataDatadogSecurityMonitoringSuppressionsConfig" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringSuppressions } from '@cdktn/provider-datadog'

const dataDatadogSecurityMonitoringSuppressionsConfig: dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

### DataDatadogSecurityMonitoringSuppressionsSuppressions <a name="DataDatadogSecurityMonitoringSuppressionsSuppressions" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringSuppressions } from '@cdktn/provider-datadog'

const dataDatadogSecurityMonitoringSuppressionsSuppressions: dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSecurityMonitoringSuppressionsSuppressionsList <a name="DataDatadogSecurityMonitoringSuppressionsSuppressionsList" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringSuppressions } from '@cdktn/provider-datadog'

new dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.get"></a>

```typescript
public get(index: number): DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference <a name="DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer"></a>

```typescript
import { dataDatadogSecurityMonitoringSuppressions } from '@cdktn/provider-datadog'

new dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.dataExclusionQuery">dataExclusionQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.ruleQuery">ruleQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.suppressionQuery">suppressionQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions">DataDatadogSecurityMonitoringSuppressionsSuppressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataExclusionQuery`<sup>Required</sup> <a name="dataExclusionQuery" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.dataExclusionQuery"></a>

```typescript
public readonly dataExclusionQuery: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ruleQuery`<sup>Required</sup> <a name="ruleQuery" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.ruleQuery"></a>

```typescript
public readonly ruleQuery: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `suppressionQuery`<sup>Required</sup> <a name="suppressionQuery" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.suppressionQuery"></a>

```typescript
public readonly suppressionQuery: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogSecurityMonitoringSuppressionsSuppressions;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringSuppressions.DataDatadogSecurityMonitoringSuppressionsSuppressions">DataDatadogSecurityMonitoringSuppressionsSuppressions</a>

---



