# `sensitiveDataScannerRule` Submodule <a name="`sensitiveDataScannerRule` Submodule" id="@cdktn/provider-datadog.sensitiveDataScannerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveDataScannerRule <a name="SensitiveDataScannerRule" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule datadog_sensitive_data_scanner_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SensitiveDataScannerRule(Construct Scope, string Id, SensitiveDataScannerRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig">SensitiveDataScannerRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig">SensitiveDataScannerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putIncludedKeywordConfiguration">PutIncludedKeywordConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putSuppressions">PutSuppressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putTextReplacement">PutTextReplacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetExcludedNamespaces">ResetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIncludedKeywordConfiguration">ResetIncludedKeywordConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetNamespaces">ResetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetStandardPatternId">ResetStandardPatternId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetSuppressions">ResetSuppressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTextReplacement">ResetTextReplacement</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIncludedKeywordConfiguration` <a name="PutIncludedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putIncludedKeywordConfiguration"></a>

```csharp
private void PutIncludedKeywordConfiguration(SensitiveDataScannerRuleIncludedKeywordConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putIncludedKeywordConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a>

---

##### `PutSuppressions` <a name="PutSuppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putSuppressions"></a>

```csharp
private void PutSuppressions(SensitiveDataScannerRuleSuppressions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putSuppressions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a>

---

##### `PutTextReplacement` <a name="PutTextReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putTextReplacement"></a>

```csharp
private void PutTextReplacement(SensitiveDataScannerRuleTextReplacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putTextReplacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludedNamespaces` <a name="ResetExcludedNamespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetExcludedNamespaces"></a>

```csharp
private void ResetExcludedNamespaces()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludedKeywordConfiguration` <a name="ResetIncludedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIncludedKeywordConfiguration"></a>

```csharp
private void ResetIncludedKeywordConfiguration()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetNamespaces"></a>

```csharp
private void ResetNamespaces()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetStandardPatternId` <a name="ResetStandardPatternId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetStandardPatternId"></a>

```csharp
private void ResetStandardPatternId()
```

##### `ResetSuppressions` <a name="ResetSuppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetSuppressions"></a>

```csharp
private void ResetSuppressions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTextReplacement` <a name="ResetTextReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTextReplacement"></a>

```csharp
private void ResetTextReplacement()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SensitiveDataScannerRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SensitiveDataScannerRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SensitiveDataScannerRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SensitiveDataScannerRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SensitiveDataScannerRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SensitiveDataScannerRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SensitiveDataScannerRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SensitiveDataScannerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SensitiveDataScannerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.includedKeywordConfiguration">IncludedKeywordConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference">SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.suppressions">Suppressions</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference">SensitiveDataScannerRuleSuppressionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacement">TextReplacement</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference">SensitiveDataScannerRuleTextReplacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespacesInput">ExcludedNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.includedKeywordConfigurationInput">IncludedKeywordConfigurationInput</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespacesInput">NamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternIdInput">StandardPatternIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.suppressionsInput">SuppressionsInput</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacementInput">TextReplacementInput</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespaces">Namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternId">StandardPatternId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IncludedKeywordConfiguration`<sup>Required</sup> <a name="IncludedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.includedKeywordConfiguration"></a>

```csharp
public SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference IncludedKeywordConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference">SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference</a>

---

##### `Suppressions`<sup>Required</sup> <a name="Suppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.suppressions"></a>

```csharp
public SensitiveDataScannerRuleSuppressionsOutputReference Suppressions { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference">SensitiveDataScannerRuleSuppressionsOutputReference</a>

---

##### `TextReplacement`<sup>Required</sup> <a name="TextReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacement"></a>

```csharp
public SensitiveDataScannerRuleTextReplacementOutputReference TextReplacement { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference">SensitiveDataScannerRuleTextReplacementOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludedNamespacesInput`<sup>Optional</sup> <a name="ExcludedNamespacesInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespacesInput"></a>

```csharp
public string[] ExcludedNamespacesInput { get; }
```

- *Type:* string[]

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludedKeywordConfigurationInput`<sup>Optional</sup> <a name="IncludedKeywordConfigurationInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.includedKeywordConfigurationInput"></a>

```csharp
public SensitiveDataScannerRuleIncludedKeywordConfiguration IncludedKeywordConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a>

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespacesInput"></a>

```csharp
public string[] NamespacesInput { get; }
```

- *Type:* string[]

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `StandardPatternIdInput`<sup>Optional</sup> <a name="StandardPatternIdInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternIdInput"></a>

```csharp
public string StandardPatternIdInput { get; }
```

- *Type:* string

---

##### `SuppressionsInput`<sup>Optional</sup> <a name="SuppressionsInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.suppressionsInput"></a>

```csharp
public SensitiveDataScannerRuleSuppressions SuppressionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TextReplacementInput`<sup>Optional</sup> <a name="TextReplacementInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacementInput"></a>

```csharp
public SensitiveDataScannerRuleTextReplacement TextReplacementInput { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludedNamespaces`<sup>Required</sup> <a name="ExcludedNamespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespaces"></a>

```csharp
public string[] ExcludedNamespaces { get; }
```

- *Type:* string[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespaces"></a>

```csharp
public string[] Namespaces { get; }
```

- *Type:* string[]

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `StandardPatternId`<sup>Required</sup> <a name="StandardPatternId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternId"></a>

```csharp
public string StandardPatternId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveDataScannerRuleConfig <a name="SensitiveDataScannerRuleConfig" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SensitiveDataScannerRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GroupId,
    string Description = null,
    string[] ExcludedNamespaces = null,
    string Id = null,
    SensitiveDataScannerRuleIncludedKeywordConfiguration IncludedKeywordConfiguration = null,
    bool|IResolvable IsEnabled = null,
    string Name = null,
    string[] Namespaces = null,
    string Pattern = null,
    double Priority = null,
    string StandardPatternId = null,
    SensitiveDataScannerRuleSuppressions Suppressions = null,
    string[] Tags = null,
    SensitiveDataScannerRuleTextReplacement TextReplacement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.groupId">GroupId</a></code> | <code>string</code> | Id of the scanning group the rule belongs to. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.description">Description</a></code> | <code>string</code> | Description of the rule. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code>string[]</code> | Attributes excluded from the scan. If namespaces is provided, it has to be a sub-path of the namespaces array. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#id SensitiveDataScannerRule#id}. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.includedKeywordConfiguration">IncludedKeywordConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a></code> | included_keyword_configuration block. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not the rule is enabled. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.name">Name</a></code> | <code>string</code> | Name of the rule. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.namespaces">Namespaces</a></code> | <code>string[]</code> | Attributes included in the scan. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.pattern">Pattern</a></code> | <code>string</code> | Not included if there is a relationship to a standard pattern. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Priority level of the rule (optional). |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.standardPatternId">StandardPatternId</a></code> | <code>string</code> | Id of the standard pattern the rule refers to. If provided, then pattern must not be provided. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.suppressions">Suppressions</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a></code> | suppressions block. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.tags">Tags</a></code> | <code>string[]</code> | List of tags. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.textReplacement">TextReplacement</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a></code> | text_replacement block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Id of the scanning group the rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#group_id SensitiveDataScannerRule#group_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#description SensitiveDataScannerRule#description}

---

##### `ExcludedNamespaces`<sup>Optional</sup> <a name="ExcludedNamespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.excludedNamespaces"></a>

```csharp
public string[] ExcludedNamespaces { get; set; }
```

- *Type:* string[]

Attributes excluded from the scan. If namespaces is provided, it has to be a sub-path of the namespaces array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#excluded_namespaces SensitiveDataScannerRule#excluded_namespaces}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#id SensitiveDataScannerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludedKeywordConfiguration`<sup>Optional</sup> <a name="IncludedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.includedKeywordConfiguration"></a>

```csharp
public SensitiveDataScannerRuleIncludedKeywordConfiguration IncludedKeywordConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a>

included_keyword_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#included_keyword_configuration SensitiveDataScannerRule#included_keyword_configuration}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#is_enabled SensitiveDataScannerRule#is_enabled}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#name SensitiveDataScannerRule#name}

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.namespaces"></a>

```csharp
public string[] Namespaces { get; set; }
```

- *Type:* string[]

Attributes included in the scan.

If namespaces is empty or missing, all attributes except excluded_namespaces are scanned. If both are missing the whole event is scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#namespaces SensitiveDataScannerRule#namespaces}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Not included if there is a relationship to a standard pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#pattern SensitiveDataScannerRule#pattern}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Priority level of the rule (optional).

Used to order sensitive data discovered in the sds summary page. It must be between 1 and 5 (1 being the most important).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#priority SensitiveDataScannerRule#priority}

---

##### `StandardPatternId`<sup>Optional</sup> <a name="StandardPatternId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.standardPatternId"></a>

```csharp
public string StandardPatternId { get; set; }
```

- *Type:* string

Id of the standard pattern the rule refers to. If provided, then pattern must not be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#standard_pattern_id SensitiveDataScannerRule#standard_pattern_id}

---

##### `Suppressions`<sup>Optional</sup> <a name="Suppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.suppressions"></a>

```csharp
public SensitiveDataScannerRuleSuppressions Suppressions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a>

suppressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#suppressions SensitiveDataScannerRule#suppressions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#tags SensitiveDataScannerRule#tags}

---

##### `TextReplacement`<sup>Optional</sup> <a name="TextReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.textReplacement"></a>

```csharp
public SensitiveDataScannerRuleTextReplacement TextReplacement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

text_replacement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#text_replacement SensitiveDataScannerRule#text_replacement}

---

### SensitiveDataScannerRuleIncludedKeywordConfiguration <a name="SensitiveDataScannerRuleIncludedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SensitiveDataScannerRuleIncludedKeywordConfiguration {
    double CharacterCount,
    string[] Keywords
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.property.characterCount">CharacterCount</a></code> | <code>double</code> | Number of characters before the match to find a keyword validating the match. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.property.keywords">Keywords</a></code> | <code>string[]</code> | Keyword list that is checked during scanning in order to validate a match. |

---

##### `CharacterCount`<sup>Required</sup> <a name="CharacterCount" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.property.characterCount"></a>

```csharp
public double CharacterCount { get; set; }
```

- *Type:* double

Number of characters before the match to find a keyword validating the match.

It must be between 1 and 50 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#character_count SensitiveDataScannerRule#character_count}

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.property.keywords"></a>

```csharp
public string[] Keywords { get; set; }
```

- *Type:* string[]

Keyword list that is checked during scanning in order to validate a match.

The number of keywords in the list must be lower than or equal to 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#keywords SensitiveDataScannerRule#keywords}

---

### SensitiveDataScannerRuleSuppressions <a name="SensitiveDataScannerRuleSuppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SensitiveDataScannerRuleSuppressions {
    string[] EndsWith = null,
    string[] ExactMatch = null,
    string[] StartsWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.endsWith">EndsWith</a></code> | <code>string[]</code> | Any match that ends with a value in this list will be suppressed. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.exactMatch">ExactMatch</a></code> | <code>string[]</code> | Any match that appears in this list will be suppressed. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.startsWith">StartsWith</a></code> | <code>string[]</code> | Any match that starts with a value in this list will be suppressed. |

---

##### `EndsWith`<sup>Optional</sup> <a name="EndsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.endsWith"></a>

```csharp
public string[] EndsWith { get; set; }
```

- *Type:* string[]

Any match that ends with a value in this list will be suppressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#ends_with SensitiveDataScannerRule#ends_with}

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.exactMatch"></a>

```csharp
public string[] ExactMatch { get; set; }
```

- *Type:* string[]

Any match that appears in this list will be suppressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#exact_match SensitiveDataScannerRule#exact_match}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.startsWith"></a>

```csharp
public string[] StartsWith { get; set; }
```

- *Type:* string[]

Any match that starts with a value in this list will be suppressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#starts_with SensitiveDataScannerRule#starts_with}

---

### SensitiveDataScannerRuleTextReplacement <a name="SensitiveDataScannerRuleTextReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SensitiveDataScannerRuleTextReplacement {
    string Type,
    double NumberOfChars = null,
    string ReplacementString = null,
    bool|IResolvable ShouldSaveMatch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.type">Type</a></code> | <code>string</code> | Type of the replacement text. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.numberOfChars">NumberOfChars</a></code> | <code>double</code> | Required if type == 'partial_replacement_from_beginning' or 'partial_replacement_from_end'. It must be > 0. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.replacementString">ReplacementString</a></code> | <code>string</code> | Required if type == 'replacement_string'. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.shouldSaveMatch">ShouldSaveMatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Only valid when type == `replacement_string`. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the replacement text.

None means no replacement. hash means the data will be stubbed. replacement_string means that one can chose a text to replace the data. partial_replacement_from_beginning allows a user to partially replace the data from the beginning, and partial_replacement_from_end on the other hand, allows to replace data from the end. Valid values are `none`, `hash`, `replacement_string`, `partial_replacement_from_beginning`, `partial_replacement_from_end`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#type SensitiveDataScannerRule#type}

---

##### `NumberOfChars`<sup>Optional</sup> <a name="NumberOfChars" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.numberOfChars"></a>

```csharp
public double NumberOfChars { get; set; }
```

- *Type:* double

Required if type == 'partial_replacement_from_beginning' or 'partial_replacement_from_end'. It must be > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#number_of_chars SensitiveDataScannerRule#number_of_chars}

---

##### `ReplacementString`<sup>Optional</sup> <a name="ReplacementString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.replacementString"></a>

```csharp
public string ReplacementString { get; set; }
```

- *Type:* string

Required if type == 'replacement_string'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#replacement_string SensitiveDataScannerRule#replacement_string}

---

##### `ShouldSaveMatch`<sup>Optional</sup> <a name="ShouldSaveMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.shouldSaveMatch"></a>

```csharp
public bool|IResolvable ShouldSaveMatch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Only valid when type == `replacement_string`.

When enabled, matches can be unmasked in logs by users with ‘Data Scanner Unmask’ permission. As a security best practice, avoid masking for highly-sensitive, long-lived data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/sensitive_data_scanner_rule#should_save_match SensitiveDataScannerRule#should_save_match}

---

## Classes <a name="Classes" id="Classes"></a>

### SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference <a name="SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.characterCountInput">CharacterCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.keywordsInput">KeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.characterCount">CharacterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.keywords">Keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CharacterCountInput`<sup>Optional</sup> <a name="CharacterCountInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.characterCountInput"></a>

```csharp
public double CharacterCountInput { get; }
```

- *Type:* double

---

##### `KeywordsInput`<sup>Optional</sup> <a name="KeywordsInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.keywordsInput"></a>

```csharp
public string[] KeywordsInput { get; }
```

- *Type:* string[]

---

##### `CharacterCount`<sup>Required</sup> <a name="CharacterCount" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.characterCount"></a>

```csharp
public double CharacterCount { get; }
```

- *Type:* double

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.keywords"></a>

```csharp
public string[] Keywords { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.internalValue"></a>

```csharp
public SensitiveDataScannerRuleIncludedKeywordConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a>

---


### SensitiveDataScannerRuleSuppressionsOutputReference <a name="SensitiveDataScannerRuleSuppressionsOutputReference" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SensitiveDataScannerRuleSuppressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetEndsWith">ResetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndsWith` <a name="ResetEndsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetEndsWith"></a>

```csharp
private void ResetEndsWith()
```

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetExactMatch"></a>

```csharp
private void ResetExactMatch()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.endsWithInput">EndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.exactMatchInput">ExactMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.startsWithInput">StartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.endsWith">EndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.exactMatch">ExactMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.startsWith">StartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndsWithInput`<sup>Optional</sup> <a name="EndsWithInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.endsWithInput"></a>

```csharp
public string[] EndsWithInput { get; }
```

- *Type:* string[]

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.exactMatchInput"></a>

```csharp
public string[] ExactMatchInput { get; }
```

- *Type:* string[]

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.startsWithInput"></a>

```csharp
public string[] StartsWithInput { get; }
```

- *Type:* string[]

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.endsWith"></a>

```csharp
public string[] EndsWith { get; }
```

- *Type:* string[]

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.exactMatch"></a>

```csharp
public string[] ExactMatch { get; }
```

- *Type:* string[]

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.startsWith"></a>

```csharp
public string[] StartsWith { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.internalValue"></a>

```csharp
public SensitiveDataScannerRuleSuppressions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a>

---


### SensitiveDataScannerRuleTextReplacementOutputReference <a name="SensitiveDataScannerRuleTextReplacementOutputReference" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SensitiveDataScannerRuleTextReplacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetNumberOfChars">ResetNumberOfChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetReplacementString">ResetReplacementString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetShouldSaveMatch">ResetShouldSaveMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfChars` <a name="ResetNumberOfChars" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetNumberOfChars"></a>

```csharp
private void ResetNumberOfChars()
```

##### `ResetReplacementString` <a name="ResetReplacementString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetReplacementString"></a>

```csharp
private void ResetReplacementString()
```

##### `ResetShouldSaveMatch` <a name="ResetShouldSaveMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetShouldSaveMatch"></a>

```csharp
private void ResetShouldSaveMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfCharsInput">NumberOfCharsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementStringInput">ReplacementStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.shouldSaveMatchInput">ShouldSaveMatchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfChars">NumberOfChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementString">ReplacementString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.shouldSaveMatch">ShouldSaveMatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberOfCharsInput`<sup>Optional</sup> <a name="NumberOfCharsInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfCharsInput"></a>

```csharp
public double NumberOfCharsInput { get; }
```

- *Type:* double

---

##### `ReplacementStringInput`<sup>Optional</sup> <a name="ReplacementStringInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementStringInput"></a>

```csharp
public string ReplacementStringInput { get; }
```

- *Type:* string

---

##### `ShouldSaveMatchInput`<sup>Optional</sup> <a name="ShouldSaveMatchInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.shouldSaveMatchInput"></a>

```csharp
public bool|IResolvable ShouldSaveMatchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `NumberOfChars`<sup>Required</sup> <a name="NumberOfChars" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfChars"></a>

```csharp
public double NumberOfChars { get; }
```

- *Type:* double

---

##### `ReplacementString`<sup>Required</sup> <a name="ReplacementString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementString"></a>

```csharp
public string ReplacementString { get; }
```

- *Type:* string

---

##### `ShouldSaveMatch`<sup>Required</sup> <a name="ShouldSaveMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.shouldSaveMatch"></a>

```csharp
public bool|IResolvable ShouldSaveMatch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.internalValue"></a>

```csharp
public SensitiveDataScannerRuleTextReplacement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

---



